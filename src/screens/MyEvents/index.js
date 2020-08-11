import React, {useState, useEffect, useContext} from 'react';
import moment from 'moment';

import {Text, Title, ScrollView} from './styles';
import EventCard from '../../components/EventCard';
import Header from '../../components/Header/Feed';
import Menu from '../../containers/Menu';
import {getAll} from '../../services/order';
import {Alert} from 'react-native';
import Context from '../../contexts';

export default function CompanyFeed({navigation}) {
  const [events, setEvents] = useState([]);
  const {token, signOut} = useContext(Context);
  useEffect(() => {
    try {
      const getAllEvents = async () => {
        const newOrder = await getAll(token);
        const newEvents = newOrder.map((order) => order.event);
        const allDates = [...new Set(newEvents.map((event) => event.date))];
        const eventObj = allDates.map((date) => {
          const eventByDate = newEvents.filter((event) => event.date === date);
          return {
            date: moment(date).format('ddd, MMM DD'),
            eventByDate,
          };
        });
        setEvents(eventObj);
      };
      getAllEvents();
    } catch (e) {
      Alert.alert('Erro', 'Erro inesperado, tente novamente', [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
    }
  }, [token]);

  const handleOnPress = (event) => {
    navigation.navigate('InfoEvent', event);
  };

  const handleGoHome = () => {
    navigation.navigate('Feed');
  };

  const handleGoMyEvents = () => {
    navigation.navigate('MyEvents');
  };

  const handleGoOut = () => {
    signOut();
    navigation.navigate('OnBoard');
  };

  return (
    <>
      <Header />
      <ScrollView>
        {events.length > 0 ? (
          events.map((eventDate) => (
            <>
              <Title key={eventDate.date}>{eventDate.date.toUpperCase()}</Title>
              {eventDate.eventByDate.map((event) => (
                <EventCard
                  handleOnPress={() => handleOnPress(event)}
                  key={event.id}
                  event={event}
                />
              ))}
            </>
          ))
        ) : (
          <Text>Sem eventos nessa data...</Text>
        )}
      </ScrollView>
      <Menu
        selected="local-activity"
        handleGoHome={handleGoHome}
        handleGoOut={handleGoOut}
        handleGoMyEvents={handleGoMyEvents}
      />
    </>
  );
}
