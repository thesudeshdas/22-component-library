import { useEffect } from 'react';

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

      <section className='component__container component__container--alert spc-vt-l pad-m'>
        <button className='button'>DEFAULT</button>
      </section>

      <iframe
        src='https://codesandbox.io/embed/alert-03d4s?codemirror=1&fontsize=14&hidenavigation=1&moduleview=1&theme=dark&view=editor&hidedevtools=0'
        style={{
          width: '100%',
          height: '500px',
          border: '2px solid var(--COLOR-TEXT-ONE)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
        title='alert'
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      />
    </main>
  );
}
