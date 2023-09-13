import { create } from 'zustand';
import { Kill, Killfeed } from '../interfaces/killfeed.interface';
import { v4 as uuidv4 } from 'uuid';

interface KillfeedStore {
  killfeed: Killfeed;
  activeKill: Kill;

  addKillToFeed: (kill: Kill) => void;
  removeKillFromFeed: (kill: Kill) => void;
  setActiveKill: (kill: Kill) => void;
  resetActiveKill: () => void;
}

const useKillfeedStore = create<KillfeedStore>()((set) => ({
  killfeed: [],
  activeKill: {
    id: uuidv4(),
    killer: '',
    victim: '',
    weapon: {},
    killType: 'fullfinish',
  } as Kill,

  addKillToFeed: (kill: Kill) => set((state) => ({ killfeed: [...state.killfeed, kill] })),
  removeKillFromFeed: (kill: Kill) =>
    set((state) => ({ killfeed: state.killfeed.filter(({ id }) => id !== kill.id) })),
  setActiveKill: (kill: Kill) => set((state) => ({ activeKill: { ...state.activeKill, ...kill } })),
  resetActiveKill: () =>
    set(() => ({
      activeKill: {
        id: uuidv4(),
        killer: '',
        victim: '',
        weapon: {},
        killType: 'fullfinish',
      } as Kill,
    })),
}));

// HAX cause too lazy to figure out Zustand computed properties
interface KillfeedComputedProperties {
  killfeedItemCount: number;
  isWeaponSelected: boolean;
}

export const useKillfeedComputedProperties = (): KillfeedComputedProperties => {
  const state = useKillfeedStore();

  return {
    killfeedItemCount: state.killfeed.length,
    isWeaponSelected: state.activeKill.weapon.name !== undefined,
  };
};

export default useKillfeedStore;
