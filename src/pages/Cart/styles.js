import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    backgroundColor: colors.light,
    flex: 1,
    padding: metrics.basePadding,
  },

  subtotalContainer: {
    marginBottom: 1,
    backgroundColor: colors.white,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtotalLabel: {
    color: colors.regular,
    fontSize: 13,
    marginBottom: 3,
    fontWeight: 'bold',
  },

  subtotalPrice: {
    color: colors.regular,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
