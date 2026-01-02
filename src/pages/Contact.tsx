import ContactCard from "../components/ContactCard"
import { ContactForm } from "../components/ContactForm"

export const Contact = () => {
    return (
        <section className="h-full">
            <ContactForm />
            <hr className="my-10 border rounded-3xl" />
            <ContactCard />
        </section>
    )
}