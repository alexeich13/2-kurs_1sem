﻿using System;
using System.Collections.Generic;
using System.Text;

namespace lab_15
{
    class Class2
    {
        public static int RandomFor10()
        {
            Random rndm = new Random();
            return rndm.Next(10);
        }
        public static int RandomFor20()
        {
            Random rndm = new Random();
            return rndm.Next(20);
        }
        public static int RandomFor30()
        {
            Random rndm = new Random();
            return rndm.Next(30);
        }
        public static int AverageValue(int value1, int value2, int value3)
        {
            return (value1 + value2 + value3) / 3;
        }
    }
}
