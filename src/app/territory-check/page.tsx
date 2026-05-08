'use client';

import TerritoryModal from '../../components/TerritoryModal';
import { useRouter } from 'next/navigation';

export default function TerritoryCheckPage() {
  const router = useRouter();

  return (
    <main style={{ minHeight: '100vh', background: '#000' }}>
      <TerritoryModal 
        isOpen={true} 
        onClose={() => router.push('/')} 
      />
    </main>
  );
}
