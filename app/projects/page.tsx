import InfiniteMenu from '../components/InfiniteMenu'


export default function Page() {
  const items = [
    {
      image: 'https://fptpagsqdrwmvzonuhsd.supabase.co/storage/v1/object/public/imagenes//logo_toroswok.svg',
      link: 'https://toroswok-santiskrrs-projects.vercel.app/',
      title: 'Item 1',
      description: ''
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];

  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <InfiniteMenu items={items} />
    </div>
  );
}