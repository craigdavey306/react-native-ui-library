import { StyleProp, TextStyle } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Prettify } from '../../types';

const DEFAULT_ICON_SIZE = 24;

export type IconName = 'chevron-left' | 'chevron-right';

type IconStyleProp = StyleProp<TextStyle>;

type IconProp = MaterialIconProp;

type MaterialIconProp = {
  type: 'material';
  name: string;
  style?: IconStyleProp;
};

const applicationIcons: [IconName, IconProp][] = [
  ['chevron-left', { type: 'material', name: 'chevron-left' }],
  ['chevron-right', { type: 'material', name: 'chevron-right' }],
];

export const IconMap: Map<IconName, IconProp> = new Map(
  Array.from(applicationIcons),
);

export type IconProps = {
  name: IconName;
  size?: number;
  color: string;
  style?: IconStyleProp;
};

type VectorIconProps = Prettify<IconProp & Omit<IconProps, 'name'>>;

/**
 * Logic for determining the correct React Native Vector Icon component.
 * @param param0
 * @returns Returns a React Native Vector Icon or null
 */
function renderVectorIconComponent({
  type,
  name,
  style,
  size = DEFAULT_ICON_SIZE,
  color,
}: VectorIconProps): JSX.Element | null {
  switch (type) {
    case 'material':
      return (
        <MaterialIcon size={size} name={name} color={color} style={style} />
      );
    default:
      return null;
  }
}

export const Icon = ({ name, size, color }: IconProps): JSX.Element | null => {
  const iconProp = IconMap.get(name);
  if (!iconProp) return null;

  return renderVectorIconComponent({ size, color, ...iconProp });
};
