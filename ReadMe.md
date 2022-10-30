# Kaprekar's constant

There's a very cool mathematical constant discovered by Indian mathematician Dattatreya Ramchandra Kapreka - it's `6174`.

You can read [about it here](https://en.wikipedia.org/wiki/6174_(number)), but Kaprekar discovered that if you followed a certain pattern of calculations you would always end up on the same that same number...

Here are the rules:

- Think about a four digit number, just make ensure that they are all the same. `1111` is not ok, but `2020` is ok. Let's choose 1495, since that is what the Wikipedia page uses
  - Now rearrange the digits in descending order; `9541`.
  - Then rearrange the digits in ascending order; `1459`.
  - Subtract these two number from each other; `9541-1459`, giving the result `8082`
    - Note that you will need to fill out the end of the number with zeros. `999` should be `9990` for example. `88` turns to `8800`.
- Then repeat that calculations with the new number.
- Keep doing that and ... viola you'll end up in `6174`

At this point you probably think what I think... How, of all things holy, did he discover that. I mean, the number of calculations he must have made before he realized that. Who, in their right mind, would ever...

## Let's prove it

But this is a perfect thing to work with for people like us, developers that does test-driven development.

Let's write a program that lists all the calculations that is made from any number to Kaprekars constant. Like this:

```text
9541 – 1459 = 8082
8820 – 0288 = 8532
8532 – 2358 = 6174
```

Here are some cases that you can use to get started:

- `6174`

  ```text
  7641 - 1467 = 6174
  ```

- `8532`

  ```text
  8532 - 2358 = 6174
  ```

- `8082`

  ```text
  8820 - 0288 = 8532
  8532 - 2358 = 6174
  ```

- `1495`

  ```text
  9541 - 1459 = 8082
  8820 - 0288 = 8532
  8532 - 2358 = 6174
  ```

- `8273`

  ```text
  8732 - 2378 = 6354
  6543 - 3456 = 3087
  8730 - 0378 = 8352
  8532 - 2358 = 6174
  ```