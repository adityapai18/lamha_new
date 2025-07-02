import Navbar from '../Navbar';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
} 