import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    padding: metrics.basePadding / 2,
  },

  thumbnail: {
    height: 200,
    width: 140,
    alignSelf: 'center',
  },

  info: {
    marginTop: metrics.baseMargin,
  },

  name: {
    fontWeight: 'bold',
    color: colors.darker,
    fontSize: 14,
    flexWrap: 'wrap',
  },

  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  brand: {
    color: colors.light,
    fontSize: 12,
  },

  price: {
    fontWeight: 'bold',
    color: colors.regular,
    fontSize: 20,
  },

  button: {
    backgroundColor: colors.secundary,
    alignItems: 'center',
    borderRadius: metrics.baseRadius,
    paddingVertical: metrics.basePadding / 2,
    marginTop: metrics.baseMargin,
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
