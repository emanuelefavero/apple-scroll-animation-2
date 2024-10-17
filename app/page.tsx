import AppleScrollAnimation from './components/AppleScrollAnimation'

export default function Home() {
  return (
    <>
      <AppleScrollAnimation
        imgUrl='https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subheading='Subheading 1'
        heading='Heading 1'
      />
      <AppleScrollAnimation
        imgUrl='https://images.unsplash.com/photo-1620120966883-d977b57a96ec?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subheading='Subheading 2'
        heading='Heading 2'
      />
      <AppleScrollAnimation
        imgUrl='https://images.unsplash.com/photo-1690046793092-f8d634523264?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        subheading='Subheading 3'
        heading='Heading 3'
      />

      {/* TIP: You can also add content between the scroll animations but make sure to remove the scale (bigger) animation in the StickyImage component to prevent visual issues */}
    </>
  )
}
