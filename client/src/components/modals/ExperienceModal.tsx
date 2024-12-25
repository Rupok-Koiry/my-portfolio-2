import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Dropzone from "react-dropzone";
import axios from "axios";
import { IoMdCloudUpload } from "react-icons/io";
import Button from "../SubmitButton";
import { useUpdateExperience } from "../../hooks/experiences/useUpdateExperience";
import { useCreateExperience } from "../../hooks/experiences/useCreateExperience";

interface FormData {
  title: string;
  provider: string;
  duration: string;
  description: string;
  img: string;
}

const ExperienceModal = ({
  modalIsOpen,
  setModalIsOpen,
  experience,
}: {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  experience?: any;
}) => {
  const { updateExperience } = useUpdateExperience();
  const { createExperience } = useCreateExperience();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      provider: "",
      duration: "",
      description: "",
      img: "",
    },
  });

  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    if (experience) {
      reset({
        title: experience.title,
        provider: experience.provider,
        duration: experience.duration,
        description: experience.description,
        img: experience.img,
      });
      setUploadedImage(experience.img);
    } else {
      reset({
        title: "",
        provider: "",
        duration: "",
        description: "",
        img: "",
      });
      setUploadedImage("");
    }
  }, [experience, reset]);

  const onSubmit = (newExperience: FormData) => {
    clearErrors("img");
    newExperience.img = uploadedImage;
    if (experience) {
      updateExperience({
        newExperience,
        experienceId: experience?._id,
      });
    } else {
      createExperience(newExperience);
    }
    closeModal();
  };

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    setLoading(true);
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cleancode");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/djkdk03mf/image/upload",
        formData
      );
      setUploadedImage(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeImage = () => {
    setUploadedImage("");
  };

  return (
    <AnimatePresence>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Experience Details"
          className="container z-50 mx-5"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative md:w-2/3 mx-auto max-h-[80vh] overflow-auto rounded-lg bg-default p-8 shadow-lg border-primary border-2"
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full bg-primary-white p-2 text-xl text-primary-grey shadow-lg transition-transform duration-300 will-change-transform hover:scale-90 lg:text-2xl"
            >
              <RxCross2 />
            </button>
            <h2 className="text-2xl font-semibold text-primary-text mb-4 text-center">
              {experience ? "Edit Experience" : "Add New Experience"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Title
                </label>
                <input
                  type="text"
                  {...register("title", { required: "Title is required" })}
                  className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
                  placeholder="Enter experience title"
                />
                {errors.title && (
                  <p className="text-primary-red text-sm">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
                  placeholder="Enter experience description"
                  rows={3}
                />
                {errors.description && (
                  <p className="text-primary-red text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Provider
                </label>
                <input
                  type="text"
                  {...register("provider", {
                    required: "Provider is required",
                  })}
                  className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
                  placeholder="Enter experience provider"
                />
                {errors.provider && (
                  <p className="text-primary-red text-sm">
                    {errors.provider.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Duration
                </label>
                <input
                  type="date"
                  {...register("duration", {
                    required: "Duration is required",
                  })}
                  className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
                  placeholder="Enter experience duration"
                />
                {errors.duration && (
                  <p className="text-primary-red text-sm">
                    {errors.duration.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Image
                </label>
                <Controller
                  name="img"
                  control={control}
                  rules={{
                    validate: () =>
                      uploadedImage !== "" || "An image is required",
                  }}
                  render={({ field }) => (
                    <Dropzone
                      onDrop={async (acceptedFiles) => {
                        await onDrop(acceptedFiles);
                        field.onChange(uploadedImage);
                      }}
                      multiple={false}
                      accept={{
                        "image/png": [".png"],
                        "image/jpg": [".jpg"],
                        "image/jpeg": [".jpeg"],
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps()}
                          className="w-full px-8 py-3 border border-secondary-grey hover:border-primary-orange rounded-md cursor-pointer"
                        >
                          <input {...getInputProps()} />
                          <div className="flex justify-center text-4xl">
                            <IoMdCloudUpload className="text-primary-orange" />
                          </div>
                          <p className="text-secondary-text text-center">
                            Upload an image of the experience
                          </p>
                          {loading && (
                            <p className="text-primary-text text-center">
                              Uploading...
                            </p>
                          )}
                        </div>
                      )}
                    </Dropzone>
                  )}
                />
                {errors.img && (
                  <p className="text-primary-red text-sm">
                    {errors.img.message}
                  </p>
                )}
                {uploadedImage && (
                  <div className="mt-2 relative">
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="h-24 w-24 rounded-md object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-primary-red text-primary-white rounded-full p-1 hover:bg-red-600"
                      onClick={removeImage}
                    >
                      <RxCross2 />
                    </button>
                  </div>
                )}
              </div>
              <Button className="w-full" disabled={loading} loading={loading}>
                {experience ? "Update Experience" : "Add Experience"}
              </Button>
            </form>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default ExperienceModal;
