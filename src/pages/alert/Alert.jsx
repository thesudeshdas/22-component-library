import { useEffect } from 'react';
import { IcRoundClose } from '../../assets/icons';

export default function Alert() {
  useEffect(() => {
    document.title = 'Dash UI | Alert';
  }, []);

  return (
    <main className='page'>
      <h1 className='component__heading'>Alert</h1>
      <h3 className='component__subheading'>
        Display success, warning and error messages.
      </h3>

      <h2 className='font-weight-600 margin-vertical-md'>Basic Alert</h2>
      <p className='margin-vertical-md'>
        A basic alert can made using the <pre>alert</pre> class for the default.
        To choose a color the class can be followed by{' '}
        <pre>alert-[variant]</pre>. For example <pre>alert</pre> followed by{' '}
        <pre>alert-danger</pre> will give the danger alert
      </p>

      <section className='component__container component__container--alert margin-vertical-lg padding-md'>
        <div className='alert alert--primary flex-horizontal flex-align-center'>
          <strong>Primary!</strong> This is a primary alert. Check it out!
        </div>
        <div className='alert alert--success flex-horizontal flex-align-center'>
          <strong>Success!</strong> This is a success alert. Check it out!
        </div>
        <div className='alert alert--warning flex-horizontal flex-align-center'>
          <strong>Warning!</strong> This is a warning alert. Check it out!
        </div>
        <div className='alert alert--danger flex-horizontal flex-align-center'>
          <strong>Danger!</strong> This is a danger alert. Check it out!
        </div>
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

      <h2 className='font-weight-600 margin-vertical-md'>Outline Alert</h2>
      <p className='margin-vertical-md'>
        An outline alert can made using the <pre>alert-outline--[variant]</pre>{' '}
        class for the outline. For example <pre>alert</pre> followed by{' '}
        <pre>alert-outline--danger</pre> will give the danger outline alert
      </p>

      <section className='component__container component__container--alert margin-vertical-lg padding-md'>
        <div className='alert alert-outline--primary flex-horizontal flex-align-center'>
          <strong>Primary!</strong> This is a primary alert. Check it out!
        </div>
        <div className='alert alert-outline--success flex-horizontal flex-align-center'>
          <strong>Success!</strong> This is a success alert. Check it out!
        </div>
        <div className='alert alert-outline--warning flex-horizontal flex-align-center'>
          <strong>Warning!</strong> This is a warning alert. Check it out!
        </div>
        <div className='alert alert-outline--danger flex-horizontal flex-align-center'>
          <strong>Danger!</strong> This is a danger alert. Check it out!
        </div>
      </section>

      <iframe
        src='https://codesandbox.io/embed/outline-alert-quftmp?codemirror=1&fontsize=14&hidenavigation=1&moduleview=1&theme=dark&view=editor&hidedevtools=0'
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

      <h2 className='font-weight-600 margin-vertical-md'>
        Alert with Close Button
      </h2>
      <p className='margin-vertical-md'>
        A close button can be added to the basic alert to make the close button
        alert variant. Simply add the <pre>button</pre> tag with the classes
        which can be found in the code snippet below.
      </p>

      <section className='component__container component__container--alert margin-vertical-lg padding-md'>
        <div className='alert alert--primary flex-horizontal flex-align-center'>
          <strong>Primary!</strong> This is a primary alert. Check it out!
          <button className='alert-close font-size-xl'>
            <IcRoundClose />
          </button>
        </div>
        <div className='alert alert--success flex-horizontal flex-align-center'>
          <strong>Success!</strong> This is a success alert. Check it out!
          <button className='alert-close font-size-xl'>
            <IcRoundClose />
          </button>
        </div>
        <div className='alert alert--warning flex-horizontal flex-align-center'>
          <strong>Warning!</strong> This is a warning alert. Check it out!
          <button className='alert-close font-size-xl'>
            <IcRoundClose />
          </button>
        </div>
        <div className='alert alert--danger flex-horizontal flex-align-center'>
          <strong>Danger!</strong> This is a danger alert. Check it out!
          <button className='alert-close font-size-xl'>
            <IcRoundClose />
          </button>
        </div>
      </section>

      <iframe
        src='https://codesandbox.io/embed/alert-with-close-button-uuzq76?codemirror=1&fontsize=14&hidenavigation=1&moduleview=1&theme=dark&view=editor&hidedevtools=0'
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
