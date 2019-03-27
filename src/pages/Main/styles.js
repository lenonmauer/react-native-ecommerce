import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    backgroundColor: colors.light,
    flex: 1,
    paddingTop: metrics.basePadding,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
