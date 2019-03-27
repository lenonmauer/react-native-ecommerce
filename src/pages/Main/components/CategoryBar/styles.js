import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },

  categoryView: {
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding,
  },

  categoryText: {
    color: colors.regular,
    fontWeight: 'bold',
  },

  active: {
    color: colors.white,
  },
});

export default styles;
