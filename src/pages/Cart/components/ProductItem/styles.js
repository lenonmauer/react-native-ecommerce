import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    padding: metrics.basePadding * 0.5,
  },

  productWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  actionsWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },

  thumbnail: {
    height: 55,
    width: 40,
    marginRight: metrics.baseMargin * 0.5,
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

  inputContainer: {
    height: 32,
    width: 46,
    justifyContent: 'center',
    marginRight: metrics.baseMargin * 0.5,
  },

  input: {
    borderColor: colors.light,
    borderWidth: 1,
    borderRadius: metrics.baseRadius,
    paddingVertical: 0,
    paddingHorizontal: metrics.basePadding * 0.5,
  },
});

export default styles;
