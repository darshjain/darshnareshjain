import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Educations } from "@/components/Education";


export default function Education() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        Where I&apos;ve been studying at
      </Heading>
      <Educations />
      
    </Container>
  );
}
