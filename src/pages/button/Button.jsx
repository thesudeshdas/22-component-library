import { useEffect } from 'react';
import {
  IcRoundClose,
  IcRoundDelete,
  IcRoundShoppingCart,
} from '../../assets/icons';

export default function Button() {
  useEffect(() => {
    document.title = 'Dash UI | Button';
  }, []);

  return (
    <main className='page'>
      <h1 className='component__heading'>Button</h1>
      <h3 className='component__subheading'>
        Easily create nice looking buttons, which come in different styles.
      </h3>

      <h2 className='font-sbd spc-vt-m'>Basic Button</h2>
      <p className='spc-vt-m'>
        Contained buttons are high-emphasis, distinguished by their use of
        elevation and fill. They contain actions that are primary to your app. A
        basic button can made using the <pre>button</pre> class. To choose a
        color the class can be followed by <pre>button-[variant]</pre>. For
        example <pre>button</pre> followed by <pre>button-danger</pre> will give
        the danger button
      </p>

      <section className='component__container component__container--button spc-vt-l pad-m'>
        <button className='button'>DEFAULT</button>
        <button className='button button-primary'>PRIMARY</button>
        <button className='button button-secondary'>SECONDARY</button>
        <button className='button button-success'>SUCCESS</button>
        <button className='button button-warning'>WARNING</button>
        <button className='button button-danger'>DANGER</button>
      </section>

      <h2 className='font-sbd spc-vt-m'>Outline Button</h2>
      <p className='spc-vt-m'>
        Outlined buttons are medium-emphasis buttons. They contain actions that
        are important but aren't the primary action in an app. An outline button
        can made using the <pre>button-outline-[variant]</pre> class. For
        example <pre>button</pre> followed by <pre>button-outline-danger</pre>{' '}
        will give the danger outline button.
      </p>

      <section className='component__container component__container--button spc-vt-l pad-m'>
        <button className='button'>DEFAULT</button>
        <button className='button button-outline-primary'>PRIMARY</button>
        <button className='button button-outline-secondary'>SECONDARY</button>
        <button className='button button-outline-success'>SUCCESS</button>
        <button className='button button-outline-warning'>WARNING</button>
        <button className='button button-outline-danger'>DANGER</button>
      </section>

      <h2 className='font-sbd spc-vt-m'>Icon Button</h2>
      <p className='spc-vt-m'>
        Icon buttons are commonly found in app bars and toolbars. Icons are also
        appropriate for toggle buttons that allow a single choice to be selected
        or deselected, such as adding or removing a star to an item. An icon
        button can made using the <pre>button-icon</pre> class. Use an icon
        inside the button to show your desired icon. It is recommended to use a{' '}
        <pre>font</pre> utility class for sizing the icon button.
      </p>

      <section className='component__container component__container--button spc-vt-l pad-m'>
        <button className='button-icon font-xl'>
          <IcRoundDelete />
        </button>
        <button className='button-icon font-xl'>
          <IcRoundClose />
        </button>
        <button className='button-icon font-xl'>
          <IcRoundShoppingCart />
        </button>
      </section>

      <h2 className='font-sbd spc-vt-m'>Link Button</h2>
      <p className='spc-vt-m'>
        Link buttons are used inside text to redicer the user to some other
        place. Use the <pre>button-link</pre> class to create a link button.
      </p>

      <section className='component__container component__container--button spc-vt-l pad-m'>
        <p>
          Dash UI makes building your apps simpler. If you like my work, feel
          free to reach out to me on{' '}
          <button className='button-link font-m'>
            <a
              href='https://twitter.com/thesudeshdas'
              target='_blank'
              rel='noreferrer'
            >
              twitter
            </a>
          </button>
          .
        </p>
      </section>

      <h2 className='font-sbd spc-vt-m'>Floating Action Button</h2>
      <p className='spc-vt-m'>
        A floating action button appears in front of all screen content,
        typically as a circular shape with an icon in its center. Use the{' '}
        <pre>button-link</pre> class to create a link button.
      </p>

      <section className='component__container component__container--button spc-vt-l pad-m'>
        <button className='button button-floating-action font-l'>
          <IcRoundShoppingCart />
        </button>
      </section>
    </main>
  );
}
