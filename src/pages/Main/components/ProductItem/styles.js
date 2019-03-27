import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    maxWidth: (metrics.screenWidth - 40) / 2,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    padding: metrics.basePadding / 2,
  },

  thumbnail: {
    height: 130,
    width: 80,
    alignSelf: 'center',
  },

  name: {
    fontWeight: 'bold',
    color: colors.darker,
  },

  brand: {
    color: colors.light,
    fontSize: 12,
  },

  price: {
    marginTop: metrics.baseMargin / 3,
    fontWeight: 'bold',
    color: colors.regular,
  },
});

export default styles;
