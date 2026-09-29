import Link from "next/link";

import { Container } from "@/components/container";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="not-found digital-subpage">
      <Container>
        <p className="eyebrow">Błąd 404</p>
        <h1>Nie ma takiej strony.</h1>
        <Link className="text-link" href="/">Wróć na stronę główną<ArrowRight /></Link>
      </Container>
    </section>
  );
}
