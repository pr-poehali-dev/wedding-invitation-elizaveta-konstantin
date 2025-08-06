import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [guestName, setGuestName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [willAttend, setWillAttend] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP submitted:', { guestName, partnerName, willAttend, comments });
    alert('Спасибо за подтверждение участия!');
  };

  const scheduleItems = [
    { time: '15:30', title: 'Сбор гостей', description: 'Просим взять с собой хорошее настроение и свои улыбки', icon: 'Users' },
    { time: '16:00', title: 'Свадебная церемония', description: 'На всякий случай приготовьте носовые платочки для трогательного момента', icon: 'Heart' },
    { time: '17:00', title: 'Праздничный банкет', description: 'Время вкусной еды, танцев и развлечений', icon: 'PartyPopper' },
    { time: '23:00', title: 'Окончание мероприятия', description: 'К сожалению, даже такой прекрасный вечер может закончиться', icon: 'Moon' }
  ];

  return (
    <div className="min-h-screen bg-soft-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <Icon name="Rings" size={64} className="text-gold mx-auto mb-4" />
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            Елизавета & Константин
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="font-roboto text-xl text-elegant-gray mb-2">Приглашают вас разделить с нами</p>
          <p className="font-cormorant text-2xl text-gray-800 font-semibold">самый важный день в нашей жизни</p>
        </div>

        {/* Date & Location */}
        <Card className="mb-12 border-0 shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <Icon name="Calendar" size={32} className="text-gold mr-3" />
                  <h3 className="font-cormorant text-3xl font-semibold text-gray-800">Дата свадьбы</h3>
                </div>
                <p className="font-roboto text-2xl text-elegant-gray font-medium">3 октября 2025</p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <Icon name="MapPin" size={32} className="text-gold mr-3" />
                  <h3 className="font-cormorant text-3xl font-semibold text-gray-800">Место проведения</h3>
                </div>
                <p className="font-roboto text-lg font-medium text-gray-800 mb-1">Durso Tower</p>
                <p className="font-roboto text-md text-elegant-gray">Южнобережная ул., 15, СНТ Форум</p>
                <p className="font-roboto text-md text-elegant-gray">хутор Дюрсо</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <div className="mb-12">
          <h2 className="font-cormorant text-4xl font-bold text-center text-gray-800 mb-8">Программа дня</h2>
          <div className="space-y-6">
            {scheduleItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                        <Icon name={item.icon as any} size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                        <span className="font-roboto text-2xl font-bold text-gold">{item.time}</span>
                        <h3 className="font-cormorant text-2xl font-semibold text-gray-800">{item.title}</h3>
                      </div>
                      <p className="font-roboto text-elegant-gray">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Map */}
        <Card className="mb-12 border-0 shadow-lg bg-white">
          <CardContent className="p-0">
            <div className="p-6 pb-0">
              <div className="flex items-center justify-center mb-4">
                <Icon name="Map" size={32} className="text-gold mr-3" />
                <h3 className="font-cormorant text-3xl font-semibold text-gray-800">Как добраться</h3>
              </div>
            </div>
            <div className="w-full h-80 bg-gray-100 rounded-b-lg relative overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7ca4e8b8a7b2b8c4c9d5e1f2g3h4i5j6&amp;source=constructor"
                width="100%"
                height="100%"
                className="border-0"
                title="Durso Tower Location"
              />
              <div className="absolute bottom-4 right-4">
                <Button 
                  onClick={() => window.open('https://yandex.ru/maps/?text=Южнобережная ул., 15, СНТ Форум, хутор Дюрсо', '_blank')}
                  className="bg-gold hover:bg-gold/90 text-white"
                >
                  Открыть в Яндекс.Картах
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RSVP Form */}
        <Card className="border-0 shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Icon name="MessageCircle" size={40} className="text-gold mx-auto mb-4" />
              <h3 className="font-cormorant text-4xl font-bold text-gray-800 mb-2">Подтверждение участия</h3>
              <p className="font-roboto text-elegant-gray">Пожалуйста, подтвердите ваше участие до 20 сентября</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="guestName" className="font-roboto text-gray-700 font-medium">
                    ФИО гостя *
                  </Label>
                  <Input
                    id="guestName"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="mt-2 border-gray-200 focus:border-gold focus:ring-gold"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="partnerName" className="font-roboto text-gray-700 font-medium">
                    ФИО второй половинки
                  </Label>
                  <Input
                    id="partnerName"
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    className="mt-2 border-gray-200 focus:border-gold focus:ring-gold"
                    placeholder="Если идете с парой"
                  />
                </div>
              </div>

              <div>
                <Label className="font-roboto text-gray-700 font-medium mb-3 block">
                  Будете ли вы с нами в этот день? *
                </Label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={willAttend === 'yes'}
                      onChange={(e) => setWillAttend(e.target.value)}
                      className="w-4 h-4 text-gold border-gray-300 focus:ring-gold"
                      required
                    />
                    <span className="ml-2 font-roboto text-gray-700">Да, обязательно буду!</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={willAttend === 'no'}
                      onChange={(e) => setWillAttend(e.target.value)}
                      className="w-4 h-4 text-gold border-gray-300 focus:ring-gold"
                      required
                    />
                    <span className="ml-2 font-roboto text-gray-700">К сожалению, не смогу</span>
                  </label>
                </div>
              </div>

              <div>
                <Label htmlFor="comments" className="font-roboto text-gray-700 font-medium">
                  Комментарии и пожелания
                </Label>
                <Textarea
                  id="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="mt-2 border-gray-200 focus:border-gold focus:ring-gold"
                  placeholder="Особые пожелания, диетические ограничения или что-то еще..."
                  rows={4}
                />
              </div>

              <Separator className="my-6" />

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-gold hover:bg-gold/90 text-white font-roboto font-medium px-8 py-3 text-lg"
                  size="lg"
                >
                  Подтвердить участие
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <Icon name="Heart" size={32} className="text-gold mx-auto mb-4" />
          <p className="font-cormorant text-xl text-elegant-gray mb-2">
            С любовью и нетерпением ждем встречи с вами!
          </p>
          <p className="font-roboto text-elegant-gray">
            Елизавета и Константин
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;