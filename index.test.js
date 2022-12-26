
const sumar = (a,b) => (a + b);
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];
  


describe("Aserssions basicos", ()=>{

    test('la suma funciona', () => { 
        const resultado = sumar(2,3)
        expect(resultado).toBe(5);
    })

    test('the shopping list has milk on it', () => {
        expect(shoppingList).toContain('milk');
        expect(new Set(shoppingList)).toContain('milk');
      });
})
