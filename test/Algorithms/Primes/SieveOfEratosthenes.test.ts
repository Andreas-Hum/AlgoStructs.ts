// SieveOfEratosthenes.test.ts
import { sieveOfEratosthenes, isPrime } from "../../../src/Algorithms/Primes";
import * as fc from 'fast-check';

describe('Sieve of Eratosthenes', () => {
    afterEach(() => {
        jest.clearAllTimers(); // Clear any timers after each test
    });

    test('all numbers in the result should be prime', () => {
        fc.assert(
            fc.property(fc.integer({ min: 2, max: 1000 }), (limit: number) => {
                const primes: number[] = sieveOfEratosthenes(limit);
                for (const prime of primes) {
                    expect(isPrime(prime)).toBe(true);
                }
            })
        );
    });

    test('result should not contain any duplicates', () => {
        fc.assert(
            fc.property(fc.integer({ min: 2, max: 1000 }), (limit: number) => {
                const primes: number[] = sieveOfEratosthenes(limit);
                const uniquePrimes: Set<number> = new Set(primes);
                expect(uniquePrimes.size).toBe(primes.length);
            })
        );
    });

    test('result should be sorted in ascending order', () => {
        fc.assert(
            fc.property(fc.integer({ min: 2, max: 1000 }), (limit: number) => {
                const primes: number[] = sieveOfEratosthenes(limit);
                for (let i = 1; i < primes.length; i++) {
                    expect(primes[i]).toBeGreaterThan(primes[i - 1]);
                }
            })
        );
    });
});