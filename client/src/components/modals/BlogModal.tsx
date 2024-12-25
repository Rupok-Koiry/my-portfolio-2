import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Dropzone from "react-dropzone";
import axios from "axios";
import { IoMdCloudUpload } from "react-icons/io";
import Button from "../SubmitButton";
import { useUpdateBlog } from "../../hooks/blogs/useUpdateBlog";
import { useCreateBlog } from "../../hooks/blogs/useCreateBlog";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
interface FormData {
  title: string;
  author: string;
  content: string;
  tags: string;
  img: string;
}

const BlogModal = ({
  modalIsOpen,
  setModalIsOpen,
  blog,
}: {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  blog?: any;
}) => {
  const { updateBlog } = useUpdateBlog();
  const { createBlog } = useCreateBlog();
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
      author: "",
      content: "",
      tags: "",
      img: "",
    },
  });

  const [uploadedImage, setUploadedImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title,
        author: blog.author,
        content: blog.content,
        tags: blog.tags.join(", "),
        img: blog.img,
      });
      setUploadedImage(blog.img);
    } else {
      reset({
        title: "",
        author: "",
        content: "",
        tags: "",
        img: "",
      });
      setUploadedImage("");
    }
  }, [blog, reset]);

  const onSubmit = (newBlog: FormData) => {
    clearErrors("img");
    const tags = newBlog.tags.split(",").map((tag) => tag.trim());
    newBlog.img = uploadedImage;
    if (blog) {
      updateBlog({
        newBlog: {
          ...newBlog,
          tags,
        },
        blogId: blog?._id,
      });
    } else {
      createBlog({ ...newBlog, tags });
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
          contentLabel="Blog Details"
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
              className="absolute right-3 top-3 rounded-full bg-primary-white  p-2 text-xl text-primary-grey shadow-lg transition-transform duration-300 will-change-transform hover:scale-90 lg:text-2xl"
            >
              <RxCross2 />
            </button>
            <h2 className="text-2xl font-semibold text-primary-text mb-4 text-center">
              {blog ? "Edit Blog" : "Add New Blog"}
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
                  placeholder="Enter blog title"
                />
                {errors.title && (
                  <p className="text-primary-red text-sm">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Author
                </label>
                <textarea
                  {...register("author", {
                    required: "Description is required",
                  })}
                  className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
                  placeholder="Enter blog description"
                  rows={3}
                />
                {errors.author && (
                  <p className="text-primary-red text-sm">
                    {errors.author.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Content
                </label>
                <Controller
                  name="content"
                  control={control}
                  rules={{ required: "Content is required" }}
                  render={({ field }) => (
                    <ReactQuill
                      value={field.value}
                      onChange={field.onChange}
                      theme="snow"
                      className="bg-white rounded-md h-40"
                    />
                  )}
                />
                {errors.content && (
                  <p className="text-primary-red text-sm">
                    {errors.content.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-primary-text mb-2">
                  Tags (separated by commas)
                </label>
                <input
                  type="text"
                  {...register("tags", { required: "Tags is required" })}
                  className="w-full border-secondary-grey rounded-md shadow-sm focus:border-primary-orange border outline-none py-1.5 lg:py-2 px-3"
                  placeholder="Enter blog tags"
                />
                {errors.tags && (
                  <p className="text-primary-red text-sm">
                    {errors.tags.message}
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
                            Upload an image of the blog
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
                {blog ? "Update Blog" : "Add Blog"}
              </Button>
            </form>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default BlogModal;
