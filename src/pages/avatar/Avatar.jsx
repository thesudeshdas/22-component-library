import { useEffect } from 'react';

export default function Avatar() {
  useEffect(() => {
    document.title = 'Dash UI | Avatar';
  }, []);

  return (
    <main className='page'>
      <h1 className='component__heading'>Avatar</h1>
      <h3 className='component__subheading'>
        Avatars are found throughout material design with uses in everything
        from tables to dialog menus.
      </h3>

      <h2 className='font-weight-600 margin-vertical-md'>Image Avatar</h2>
      <p className='margin-vertical-md'>
        Image avatars are great for user profile. It signifies a person in the
        app. An image avatar can made using the <pre>avatar-image</pre> class
        with an <pre>img</pre> HTML tag. Make sure you use the "alt" attribute
        to adhere to accessibility of your app.
      </p>

      <section className='component__container component__container--row flex-justify-center margin-vertical-lg padding-md'>
        <img
          className='avatar-image avatar-large'
          src='https://picsum.photos/200'
          alt='user'
        />
        <img
          className='avatar-image avatar-large'
          src='https://picsum.photos/200'
          alt='user'
        />
        <img
          className='avatar-image avatar-large'
          src='https://picsum.photos/200'
          alt='user'
        />
        <img
          className='avatar-image avatar-large'
          src='https://picsum.photos/200'
          alt='user'
        />
      </section>

      <h2 className='font-weight-600 margin-vertical-md'>Text Avatar</h2>
      <p className='margin-vertical-md'>
        Text avatars can be used to show the inital of the user when they do not
        have a profile picture. A text avatar can made using the{' '}
        <pre>avatar-text</pre> class with a <pre>p</pre> HTML tag inside a{' '}
        <pre>div</pre> HTML tag. The text avatar has a character limit of two
        characters. Extra characters will not be shown.
      </p>

      <section className='component__container component__container--row flex-justify-center margin-vertical-lg padding-md'>
        <div className='avatar-text avatar-large'>
          <p>SD</p>
        </div>
        <div className='avatar-text avatar-large'>
          <p>CR</p>
        </div>
        <div className='avatar-text avatar-large'>
          <p>LM</p>
        </div>
      </section>

      <h2 className='font-weight-600 margin-vertical-md'>Avatar Sizing</h2>
      <p className='margin-vertical-md'>
        The avatars come in different sizes. The size can be assigned using the{' '}
        <pre>avatar-[size]</pre> class. For example, <pre>avatar-large</pre>{' '}
        will create a large avatar.
      </p>

      <section className='component__container component__container--row flex-center margin-vertical-lg padding-md'>
        <div className='avatar-text avatar-large'>
          <p>SD</p>
        </div>
        <div className='avatar-text avatar-medium'>
          <p>CR</p>
        </div>
        <div className='avatar-text avatar-small'>
          <p>LM</p>
        </div>
      </section>
    </main>
  );
}
