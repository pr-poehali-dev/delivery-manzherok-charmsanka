import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const deliveryZones = [
  'Манжерок',
  'Черемшанка', 
  'Рыбалка',
  'Дубровка',
  'Карлушка',
  'Майма'
];

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    zone: 'Манжерок',
    rating: 5,
    text: 'Очень быстрая доставка! Заказала продукты, привезли за 2 часа. Спасибо!'
  },
  {
    id: 2,
    name: 'Михаил Сидоров',
    zone: 'Майма',
    rating: 5,
    text: 'Отличный сервис! Доставили лекарства в срок, курьер очень вежливый.'
  },
  {
    id: 3,
    name: 'Елена Козлова',
    zone: 'Карлушка',
    rating: 5,
    text: 'Пользуюсь постоянно. Всегда привозят точно в срок, цена честная.'
  }
];

export default function Index() {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    zone: '',
    description: '',
    address: ''
  });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заказ принят! Мы свяжемся с вами в ближайшее время.');
    setIsOrderDialogOpen(false);
    setOrderForm({ name: '', phone: '', zone: '', description: '', address: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange to-blue-500 text-white p-2 rounded-lg">
                <Icon name="Truck" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-700">Быстрая Доставка</h1>
                <p className="text-sm text-gray-600">Алтайский край</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-orange transition-colors">Услуги</a>
              <a href="#zones" className="text-gray-700 hover:text-orange transition-colors">Зоны</a>
              <a href="#reviews" className="text-gray-700 hover:text-orange transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange transition-colors">Контакты</a>
            </nav>
            <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-orange hover:bg-orange-600 text-white font-semibold px-6">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Заказать доставку</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы свяжемся с вами для уточнения деталей
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      value={orderForm.name}
                      onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zone">Населенный пункт</Label>
                    <Select value={orderForm.zone} onValueChange={(value) => setOrderForm({...orderForm, zone: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите населенный пункт" />
                      </SelectTrigger>
                      <SelectContent>
                        {deliveryZones.map((zone) => (
                          <SelectItem key={zone} value={zone}>{zone}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="address">Адрес доставки</Label>
                    <Input
                      id="address"
                      value={orderForm.address}
                      onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                      placeholder="Улица, дом, квартира"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Что нужно доставить</Label>
                    <Textarea
                      id="description"
                      value={orderForm.description}
                      onChange={(e) => setOrderForm({...orderForm, description: e.target.value})}
                      placeholder="Опишите что нужно забрать и доставить"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange hover:bg-orange-600">
                    Оформить заказ
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-blue-700 mb-6 animate-fade-in">
              Доставка всего что угодно
            </h2>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in">
              Быстрая и надежная доставка по населенным пунктам Алтайского края
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 animate-scale-in">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Package" size={32} className="text-orange" />
                  </div>
                  <h3 className="font-semibold text-blue-700 mb-2">Любые товары</h3>
                  <p className="text-gray-600 text-sm">Продукты, лекарства, документы, посылки</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Clock" size={32} className="text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-blue-700 mb-2">Быстро</h3>
                  <p className="text-gray-600 text-sm">Доставка в течение дня</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="DollarSign" size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold text-blue-700 mb-2">Фиксированная цена</h3>
                  <p className="text-gray-600 text-sm">1000 рублей за любую доставку</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/img/e35c131a-bf80-4ef9-bdc8-953051bed6af.jpg" 
                alt="Доставка" 
                className="rounded-2xl shadow-lg max-w-md w-full animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ShoppingCart', title: 'Продукты', desc: 'Доставка продуктов из магазинов' },
              { icon: 'Heart', title: 'Лекарства', desc: 'Доставка из аптек' },
              { icon: 'FileText', title: 'Документы', desc: 'Срочная доставка документов' },
              { icon: 'Gift', title: 'Посылки', desc: 'Любые другие товары и посылки' }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="bg-orange-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Icon name={service.icon as any} size={24} className="text-orange" />
                  </div>
                  <CardTitle className="text-blue-700">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones Section */}
      <section id="zones" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Зоны доставки</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-blue-700">Мы доставляем в следующие населенные пункты:</CardTitle>
                <CardDescription>Фиксированная стоимость доставки - 1000 рублей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {deliveryZones.map((zone, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                      <Icon name="MapPin" size={20} className="text-orange" />
                      <span className="font-medium text-blue-700">{zone}</span>
                      <Badge variant="secondary" className="ml-auto bg-green-100 text-green-700">
                        1000 ₽
                      </Badge>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Не нашли свой населенный пункт? Свяжитесь с нами!
                  </p>
                  <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Связаться с нами
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-blue-700">{review.name}</CardTitle>
                      <CardDescription>{review.zone}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-orange text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Phone" size={24} />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p>+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Clock" size={24} />
                <div>
                  <p className="font-semibold">Режим работы</p>
                  <p>Ежедневно 8:00 - 22:00</p>
                </div>
              </div>
            </div>
            <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8">
                  <Icon name="Truck" size={20} className="mr-2" />
                  Заказать доставку сейчас
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-orange text-white p-2 rounded-lg">
              <Icon name="Truck" size={20} />
            </div>
            <span className="text-xl font-bold">Быстрая Доставка</span>
          </div>
          <p className="text-blue-200 mb-4">
            Надежная доставка по Алтайскому краю
          </p>
          <p className="text-blue-300 text-sm">
            © 2024 Быстрая Доставка. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}