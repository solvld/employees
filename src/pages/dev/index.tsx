import { Navigate } from 'react-router-dom';

const DevPage = () => {
  if (import.meta.env.VITE_DEV) {
    return (
      <div className="w-full mt-8 text-center">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <h3 className="text-xl text-gray-600">
          This page only for developers.
        </h3>
        <p className="font-semibold">
          For api please use:{' '}
          <span className="underline text-gray-700">
            {`${import.meta.env.VITE_API_URL}/api`}
          </span>
        </p>
      </div>
    );
  }

  return <Navigate to="/" />;
};

export { DevPage };
