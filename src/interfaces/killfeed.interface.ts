type Killfeed = Array<Kill>;

interface Kill {
  killer: string;
  victim: string;
  weapon: Weapon;
  killType: KillType;
}

type KillKey = keyof Kill;

type WeaponCategory =
  | 'Assault Rifles'
  | 'Submachine Guns'
  | 'Sniper Rifles'
  | 'Shotguns'
  | 'Light Machine Guns'
  | 'Pistols'
  | 'Marksman Weapons';

interface Weapon {
  name: string;
  iconPath: string;
}

type KillType = 'knockdown' | 'finish';

export type { Killfeed, Kill, Weapon, WeaponCategory, KillType, KillKey };