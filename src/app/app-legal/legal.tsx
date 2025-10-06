import React from 'react';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';

const content = (
  <div>
    <Typography
      variant='h4'
      className='font-normal !text-black-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Datenschutzerklärung
    </Typography>
    <Typography
      variant='paragraph'
      className='font-normal !text-gray-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Ich, Matteo Juen, betreibe als private Person mobile Apps, die über den Apple iOS App Store verfügbar sind.&nbsp;
      Der Schutz deiner personenbezogenen Daten ist mir wichtig. Nachfolgend informiere ich darüber, welche Daten erhoben werden, wie sie genutzt werden und welche Rechte dir zustehen.
    </Typography>
    <Typography
      variant='h4'
      className='font-normal !text-black-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Erhebung und Speicherung personenbezogener Daten
    </Typography>
    <Typography
      variant='paragraph'
      className='font-normal !text-gray-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Bei der Nutzung meiner Apps können – je nach App und Funktion – folgende personenbezogene Daten gespeichert werden:&nbsp;Benutzername, E-Mail-Adresse (falls erforderlich), Benutzer-ID, App-spezifische Nutzungsdaten.
      Die Erhebung dieser Daten erfolgt ausschließlich, wenn du sie selbst angibst (z. B. bei einer Registrierung oder Nutzung bestimmter Funktionen). Diese Daten werden zwar möglicherweise erfasst, aber nicht mit deiner Identität verknüpft.
    </Typography>
    <Typography
      variant='h4'
      className='font-normal !text-black-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Zweck der Datenverarbeitung
    </Typography>
    <Typography
      variant='paragraph'
      className='font-normal !text-gray-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Die gespeicherten Daten werden genutzt, um dir die Funktionen der App bereitzustellen und eine reibungslose Nutzung zu ermöglichen. Eine Weitergabe der Daten an Dritte findet nicht statt.
    </Typography>
    <Typography
      variant='h4'
      className='font-normal !text-black-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Sicherheit der Daten
    </Typography>
    <Typography
      variant='paragraph'
      className='font-normal !text-gray-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Die Kommunikation zwischen den Apps und meinen Servern ist durch TLS (Transport Layer Security) verschlüsselt.&nbsp;Damit wird ein dem aktuellen Stand der Technik entsprechendes Schutzniveau gewährleistet.
    </Typography>
    <Typography
      variant='h4'
      className='font-normal !text-black-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Speicherung und Löschung
    </Typography>
    <Typography
      variant='paragraph'
      className='font-normal !text-gray-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Du hast ein Recht darauf eine löschung deiner Daten zu veranlassen. Auf Anfrage lösche ich deine Daten unverzüglich, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
    </Typography>
    <Typography
      variant='h4'
      className='font-normal !text-black-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Rechte der Nutzerinnen und Nutzer
    </Typography>
    <Typography
      variant='paragraph'
      className='font-normal !text-gray-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Du hast jederzeit das Recht Auskunft über die bei mir gespeicherten personenbezogenen Daten zu erhalten, Berichtigung unrichtiger Daten zu verlangen, Löschung oder Einschränkung der Verarbeitung deiner Daten zu fordern, der Verarbeitung deiner Daten zu widersprechen, sowie dein Recht auf Datenübertragbarkeit auszuüben. Bitte wende dich dazu per E-Mail an: matteojuen@outlook.com.
    </Typography>
    <Typography
      variant='h4'
      className='font-normal !text-black-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Änderungen
    </Typography>
    <Typography
      variant='paragraph'
      className='font-normal !text-gray-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
    Ich behalte mir vor, diese Datenschutzerklärung zu ändern, wenn dies aufgrund technischer Entwicklungen oder rechtlicher Anforderungen notwendig wird.
    </Typography>
  </div>
);

export default function Legal() {
  return (
    <section className='p-8'>
      <div className='mx-auto max-w-screen-md'>
        {content}
      </div>
    </section>
  );
}
