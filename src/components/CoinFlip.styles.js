import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    background: 'gray',
  },

  game: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    textAlign: 'center',
    background: 'white',
    width: 350,
    height: 350,
    padding: 35,
    borderRadius: 25,
  },

  infos: {
    position: 'relative',
    top: '50%',
  },

  results: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#171717',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginHorizontal: 0,
    marginVertical: 25,
    display: 'flex',
    fontSize: '20',
    justifyContent: 'spaceEvenly',
  },

  p: {
    marginTop: 10,
    marginBottom: 10,
  },

  button: {
    width: '45%',
    paddingVertical: 15,
    paddingHorizontal: 0,
    cursor: 'pointer',
    borderRadius: 10,
  },

  buttons: {
    display: 'flex',
    justifyContent: 'spaceBetween',
  },

  tail: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
  },
  head: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
  },

  animated_heads_head: {
    animationDuration: '1s',
    animationName: 'heads_head',
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
    transformOrigin: 'top left',
  },
  animated_heads_tail: {
    animationDuration: '1s',
    animationName: 'heads_tail',
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
    transformOrigin: 'top left',
  },

  animated_tails_head: {
    animationDuration: '1s',
    animationName: 'tails_head',
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
    transformOrigin: 'top left',
  },
  animated_tails_tail: {
    animationDuration: '1s',
    animationName: 'tails_tail',
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
    transformOrigin: 'top left',
  },
  // @keyframes heads_head {
  //   0% {
  //     height: 0,
  //     transform: scale(1) translate(50%, 50%),
  //   }
  //   16.66% {
  //     height: 0,
  //   }
  //   33.33% {
  //     height: 150px,
  //   }
  //   50% {
  //     height: 0,
  //     transform: scale(2) translate(50%, 50%),
  //   }
  //   66.66% {
  //     height: 0,
  //   }
  //   83.32% {
  //     height: 0,
  //   }
  //   100% {
  //     height: 150px,
  //     transform: scale(1) translate(50%, 50%),
  //   }
  // }
  // @keyframes heads_tail {
  //   0% {
  //     height: 150px,
  //     transform: scale(1) translate(50%, 50%),
  //   }
  //   16.66% {
  //     height: 0,
  //   }
  //   33.33% {
  //     height: 0,
  //   }
  //   50% {
  //     height: 0,
  //     transform: scale(2) translate(50%, 50%),
  //   }
  //   66.66% {
  //     height: 150px,
  //   }
  //   83.32% {
  //     height: 0,
  //   }
  //   100% {
  //     height: 0,
  //     transform: scale(1) translate(50%, 50%),
  //   }
  // }
  // @keyframes tails_head {
  //   0% {
  //     height: 150px,
  //     transform: scale(1) translate(50%, 50%),
  //   }
  //   16.66% {
  //     height: 0,
  //   }
  //   33.33% {
  //     height: 0,
  //   }
  //   50% {
  //     height: 0,
  //     transform: scale(2) translate(50%, 50%),
  //   }
  //   66.66% {
  //     height: 150px,
  //   }
  //   83.32% {
  //     height: 0,
  //   }
  //   100% {
  //     height: 0,
  //     transform: scale(1) translate(50%, 50%),
  //   }
  // }
  // @keyframes tails_tail {
  //   0% {
  //     height: 0,
  //     transform: scale(1) translate(50%, 50%),
  //   }
  //   16.66% {
  //     height: 0,
  //   }
  //   33.33% {
  //     height: 150px,
  //   }
  //   50% {
  //     height: 0,
  //     transform: scale(2) translate(50%, 50%),
  //   }
  //   66.66% {
  //     height: 0,
  //   }
  //   83.32% {
  //     height: 0,
  //   }
  //   100% {
  //     height: 150px,
  //     transform: scale(1) translate(50%, 50%),
  //   }
  // }
});
