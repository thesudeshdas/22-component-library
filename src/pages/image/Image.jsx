import { useEffect } from 'react';

export default function Image() {
  useEffect(() => {
    document.title = 'Dash UI | Image';
  }, []);

  return (
    <main className='page'>
      <h1 className='component__heading'>Image</h1>
      <h3 className='component__subheading'>
        Create beautiful images which are responsive by default.
      </h3>

      <h2 className='font-weight-600 margin-vertical-md'>Responsive Image</h2>
      <p className='margin-vertical-md'>
        Responsive images change their size based on the device. All images are
        responsive via the "width: 100%" using the <pre>image</pre> class.
      </p>

      <section className='component__container component__container--row flex-justify-center margin-vertical-lg padding-md'>
        <img
          src='https://picsum.photos/400/300'
          alt='random'
          className='image'
        />

        <img
          src='https://picsum.photos/400/300'
          alt='random'
          className='image'
        />
      </section>

      <h2 className='font-weight-600 margin-vertical-md'>Round Image</h2>
      <p className='margin-vertical-md'>
        Round images are great. All images are responsive via the "width: 100%"
        using the <pre>image</pre> utility class.
      </p>

      <section className='component__container component__container--row flex-justify-center margin-vertical-lg padding-md'>
        <img
          src='https://picsum.photos/400/300'
          alt='random'
          className='image image-round'
        />

        <img
          src='https://picsum.photos/400/400'
          alt='random'
          className='image'
        />
      </section>
    </main>
  );
}
