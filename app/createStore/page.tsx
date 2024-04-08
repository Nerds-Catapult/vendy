import ProfileForm from "../forms/AuthForm";
import CreateStoreForm from "../forms/CreateStore";

export default function CreateStore() {
  return (
    <main className=" p-4 min-h-full">
      <h1 className=" text-4xl font-bold">Create Store</h1>

      <CreateStoreForm />
    </main>
  );
}
