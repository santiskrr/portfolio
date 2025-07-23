import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

export default function Page() {
  return (
    <>
    <div>
<ScrollStack>
  <ScrollStackItem>
    <h2>Toro's wok</h2>
    <p>
      <a href="https://toroswok-santiskrrs-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
        Visit Toro's wok project
      </a>
    </p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 2</h2>
    <p>This is the second card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 3</h2>
    <p>This is the third card in the stack</p>
  </ScrollStackItem>
</ScrollStack>
        


    </div>
    </>
  )
}