potus = {
    'first': 'Joe',
    'last': 'Biden'
}

print(f"{potus['first']} {potus['last']}")
#print(f"{potus['brains']}")
brains = potus.get('brains', 'very little')
print(brains)

if 'first' in potus:
    print(potus['first'])
else:
    print('No first!')

potus['brains'] = 'some'
brains = potus.get('brains', 'very little')
print(brains)

del potus['brains']
brains = potus.get('brains', 'very little')
print(brains)

good_presidents = set(['trump', 'reagen', 'washington', 'washington'])
presidents = set(['biden', 'obama', 'carter', 'reagen'])

print(good_presidents.union(presidents))
print(good_presidents.intersection(presidents))
print(good_presidents.difference(presidents))
print(presidents.difference(good_presidents))

presidents.add('nixon')

for president in presidents:
    if president not in good_presidents:
        print(f'{president} was not a good president')
    else:
        print(f'{president} was a good president')


cant_change = frozenset(['ice cream', 'sherbert', 'ices'])
#cant_change.add('ice')
