type Props = {
  message: string;
};

export function ErrorMessage({ message }: Props) {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-blue-900 md:text-4xl">
            Sorry, something's wrong!
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">{message}</p>
        </div>
      </div>
    </section>
  );
}
