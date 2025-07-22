import TextType from './components/TextType';

export default function Page() {
  return (
    <>
    <TextType 
  text={["Mi PortFolioooooooooooo"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>

    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
  
      </h1>
      <p className="mb-4">
        {`no se.`}
      </p>
         <TextType 
  text={["Mi PortFolioooooooooooo"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
    </section>
    </>

  )
}
