const { default: FormNewPost } = require("@/components/form-new-post");

async function CreatePostPage() {
  return (
    <>
      <FormNewPost />
    </>
  );
}
export default CreatePostPage;
