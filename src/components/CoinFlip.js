import { useState } from 'react';
import { Button, View, Text, Image } from 'react-native';
import CoinFlipStyles from './CoinFlip.styles';

const animationsClasses = ['heads', 'tails'];
const chooseCoinFlip = () => animationsClasses[Math.floor(Math.random() * 2)];

function App() {
  const [animation, setAnimation] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [tries, setTries] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  const handleButtonClick = () => {
    setTries((currentTries) => currentTries + 1);
    const nextAnimation = chooseCoinFlip();
    setAnimation(nextAnimation);
    setIsAnimating(true);
    setTimeout(() => {
      nextAnimation === 'tails'
        ? setTails((currentTails) => currentTails + 1)
        : setHeads((currentHeads) => currentHeads + 1);
      setIsAnimating(false);
    }, 1000);
  };

  const reset = () => {
    setHeads(0);
    setTails(0);
  };
  return (
    <View style={CoinFlipStyles.App}>
      <View style={CoinFlipStyles.game}>
        <View key={`coin_wrapper_${tries}`}>
          <Image
            style={[
              CoinFlipStyles.head,
              CoinFlipStyles[`animated_${animation}_head`],
            ]}
            source={require('./App/images/cara.png')}
            alt='Head part of the coin'
            width='150px'
          />
          <Image
            style={[
              CoinFlipStyles.tail,
              CoinFlipStyles[`animated_${animation}_tail`],
            ]}
            source={require('./App/images/cruz.png')}
            alt='Tail part of the coin'
            width='150px'
          />
        </View>
        <View style={CoinFlipStyles.infos}>
          <View style={CoinFlipStyles.results}>
            <Text>Heads: {heads} </Text>
            <Text>Tails: {tails} </Text>
          </View>
          <View style={CoinFlipStyles.buttons}>
            <Button
              type='primary'
              source={require('./App/images/cara.png')}
              size={'large'}
              onPress={() => handleButtonClick()}
              disabled={isAnimating}
              title='FLIP'
            ></Button>
            <Button
              type='primary'
              size={'large'}
              onPress={reset}
              disabled={isAnimating}
              title='RESET'
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default App;
