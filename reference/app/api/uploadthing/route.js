import { createUploadthing, type FileRouter } from "@uploadthing/server";

export const fileRouter = createUploadthing({
  imageUploader: {
    image: { maxFileSize: "4MB" },
  },
});

export default fileRouter;
