import styles from "../styles/Rodo.module.scss";
import Button from "../components/utils/Button";
import Link from "next/link";
const Rodo = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
      <Button />
      </Link>
      <h2>Data wejścia w życie: 18.05.2023</h2>
      <h3>
        Niniejsza polityka prywatności określa zasady przetwarzania danych
        osobowych przez Wiktorię Woźnicką (Dalej przedstawianą jako Administrator) w związku z korzystaniem z naszej
        strony internetowej oraz formularza kontaktowego, zgodnie z wymogami
        ogólnego rozporządzenia o ochronie danych (RODO) i obowiązującym prawem
        Unii Europejskiej.
      </h3>
      <h3>Administrator danych osobowych</h3>
      <p>
        Administratorem danych osobowych jest Administrator.Możesz skontaktować
        się z nami w sprawach dotyczących ochrony danych osobowych poprzez adres
        e-mail: wiktoria19312@gmail.com.
      </p>
      <h3>Cele przetwarzania danych osobowych</h3>
      <p>
        Twoje dane osobowe zbierane za pośrednictwem formularza kontaktowego są
        przetwarzane w celu udzielenia odpowiedzi na Twoje zapytania,
        zapewnienia Ci informacji na temat naszych usług oraz nawiązania i
        utrzymania kontaktu.
      </p>
      <h3>Podstawa prawna przetwarzania</h3>
      <p>
        Przetwarzanie Twoich danych osobowych odbywa się na podstawie art. 6
        ust. 1 lit. a RODO, czyli na podstawie Twojej dobrowolnej zgody
        udzielonej poprzez wypełnienie formularza kontaktowego i przesłanie
        danych.
      </p>
      <h3>Odbiorcy danych osobowych</h3>
      <p>
        Twoje dane osobowe nie będą udostępniane stronom trzecim bez Twojej
        wyraźnej zgody, chyba że wymaga tego obowiązujące prawo.
      </p>
      <h3>Okres przechowywania danych osobowych</h3>
      <p>
        Twoje dane osobowe będą przechowywane przez okres niezbędny do
        osiągnięcia celów, dla których zostały zebrane, chyba że wymaga tego
        obowiązujące prawo.
      </p>
      <h3>Prawa osoby, której dane dotyczą</h3>
      <p>
        Masz prawo do dostępu do swoich danych osobowych, ich sprostowania,
        usunięcia lub ograniczenia przetwarzania, a także przenoszenia danych. W
        celu skorzystania z tych praw, skontaktuj się z nami poprzez adres
        e-mail lub pisemnie na adres naszej siedziby.
      </p>
      <h3>Prawo do wniesienia skargi</h3>
      <p>
        Masz prawo do wniesienia skargi do organu nadzorczego ds. ochrony danych
        osobowych, jeżeli uważasz, że przetwarzanie Twoich danych osobowych
        narusza obowiązujące przepisy prawa.
      </p>
      <h3>Zabezpieczenie danych osobowych</h3>
      <p>
        Podjęliśmy odpowiednie środki bezpieczeństwa, aby chronić Twoje dane
        osobowe przed nieuprawnionym dostępem, utratą, zmianą lub zniszczeniem.
        Jednakże, należy pamiętać, że żadna metoda przesyłania danych przez
        Internet lub metoda elektronicznego przechowywania danych nie jest
        całkowicie bezpieczna.
      </p>
      <h3>Linki do innych stron internetowych</h3>
      <p>
        Nasza strona internetowa może zawierać linki do innych stron
        internetowych, które nie są objęte niniejszą polityką prywatności.
        Powinieneś zapoznać się z polityką prywatności tych stron, ponieważ nie
        ponosimy odpowiedzialności za sposób, w jaki takie strony zbierają i
        wykorzystują Twoje dane osobowe.
      </p>
      <h3>
        Niniejsza polityka prywatności może być okresowo aktualizowana lub
        zmieniana. Prosimy o regularne sprawdzanie naszej strony internetowej w
        celu zapoznania się z najnowszą wersją.
      </h3>
    </div>
  );
};

export default Rodo;
