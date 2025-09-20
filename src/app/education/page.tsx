import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Educations } from "@/components/Education";


export default function Education() {
  return (
    <Container>
      <span className="text-4xl">🎓</span>
      <Heading className="font-black mb-6">
        Educational Journey
      </Heading>
      <div className="mb-6">
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
          My academic path reflects a commitment to excellence in computer science and artificial intelligence.
          From foundational engineering principles to cutting-edge AI research, each step has shaped my expertise
          in developing innovative solutions that bridge theory and practice.
        </p>
      </div>
      <Educations />
    </Container>
  );
}
