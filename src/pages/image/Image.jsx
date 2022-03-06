import { useEffect } from 'react';

export default function Image() {
  useEffect(() => {
    document.title = 'Dash UI | Image';
  }, []);

  return <div>Image</div>;
}
