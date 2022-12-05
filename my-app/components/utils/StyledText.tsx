import { TText, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <TText {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}
