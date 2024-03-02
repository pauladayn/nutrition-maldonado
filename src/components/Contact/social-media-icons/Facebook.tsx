const Facebook = () => {
  return (
    <div>
      <button
        type='button'
        data-te-ripple-init
        data-te-ripple-color='light'
        className='mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
        </svg>
      </button>
    </div>
  );
};

export default Facebook;
