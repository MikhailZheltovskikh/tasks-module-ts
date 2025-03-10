// Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки
// и рассрочки на заданное количество месяцев:

interface IPrise {
    price: number;
    discount: number;
    isInstallment?: boolean;
    months?: number;
}

const totalPrice = ({ price, discount, isInstallment = false, months = 0 }: IPrise): number => {
    const sum: number = price - (price / 100) * discount;

    if (isInstallment) {
        return sum / months;
    }

    return sum;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250

