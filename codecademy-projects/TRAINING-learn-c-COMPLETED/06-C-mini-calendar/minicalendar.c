#include <stdio.h>
#include <stdbool.h>

/*
GOAL:
Have you ever wondered how an online calendar system works? How does it magically figure out the day of the week for any given date? Or, how can it simply jump to a random date 100 days from today? Well, fear not fellow C programmer! In this project, you will learn to make your own mini-calendar with some cool functionalities! The functions that you create will be able to answer simple questions like:

Is the given year a leap year?
What is the new date 500 days from today?
We will be following the Gregorian Calendar (see: https://en.wikipedia.org/wiki/Gregorian_calendar) which is the most commonly used calendar format.
*/

//SOLUTION:
bool is_leap_year (int year) {
    return (year % 4 == 0 && (year % 100 || year % 400 == 0));
}

int days_in_month[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

void add_days_to_date (int* mm, int* dd, int* yy, int days_left_to_add) {
    int days_left_in_month;
    while (days_left_to_add > 0) {
        days_left_in_month = days_in_month[*mm] - *dd;
        if(*mm == 2 && is_leap_year(*yy)) {
            days_left_in_month++;
        } 
        if (days_left_to_add > days_left_in_month) {
            days_left_to_add -= days_left_in_month + 1;
            *dd = 1;
            if(*mm == 12) {
                *mm = 1;
                (*yy)++;
            } else {
                (*mm)++;
            }
        } else {
            *dd += days_left_to_add;
            days_left_to_add = 0;
        }
    }
    
}

int main() {
    int year;
    printf("Please type some year between 1800 and 10000\n");
    scanf("%d", &year);
    printf(is_leap_year (year) ? "Leap year\n" : "Not leap year\n");

    int mm, dd, yy, days_left_to_add;

    printf("Please enter a date between the years 1800 and 10000 in the format mm dd yy and provide the number of days to add to this date:\n");
    scanf("%d %d %d %d", &mm, &dd, &yy, &days_left_to_add);
    add_days_to_date(&mm, &dd, &yy, days_left_to_add);
    printf("%d %d %d\n", mm, dd, yy);
}