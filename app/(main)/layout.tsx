import Navbar from '../Navbar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="responsive-container">{children}</div>
    </>
  );
} 