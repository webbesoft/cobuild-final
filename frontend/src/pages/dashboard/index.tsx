interface LoaderData {
  title: string;
}

export async function clientLoader() {
  // you can now fetch data here
  return {
    title: "Dashboard page",
  };
}

export default function Component(loaderData: LoaderData) {
  return <h1>{loaderData.title}</h1>;
}
