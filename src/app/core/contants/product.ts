export const priceFilterList = [
	{ filterName: 'Under ₹1000000', min: 0, max: 999999, filterId: 1},
	{ filterName: '₹1000000 - ₹2000000', min: 1000000, max: 1999999, filterId: 2 },
	{ filterName: '₹2000000 - ₹3000000', min: 2000000, max: 2999999, filterId: 3},
	{ filterName: 'Over ₹3000000', min: 3000000, max: Infinity, filterId: 4}
]

export const productList = [
    {
        "productName": "FalconSat",
        "mrp": 90000,
        "rsp": 70000,
        "discount": 22.22,
        "launch_year": "2006",
        "productImage": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
        "details": "Engine failure at 33 seconds and loss of vehicle"
    },
    {
        "productName": "DemoSat",
        "mrp": 180000,
        "rsp": 160000,
        "discount": 11.11,
        "launch_year": "2007",
        "productImage": "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
        "details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
    },
    {
        "productName": "Trailblazer",
        "mrp": 270000,
        "rsp": 250000,
        "discount": 7.41,
        "launch_year": "2008",
        "productImage": "https://images2.imgbox.com/3d/86/cnu0pan8_o.png",
        "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2"
    },
    {
        "productName": "RatSat",
        "mrp": 360000,
        "rsp": 340000,
        "discount": 5.56,
        "launch_year": "2008",
        "productImage": "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png",
        "details": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1"
    },
    {
        "productName": "RazakSat",
        "mrp": 450000,
        "rsp": 430000,
        "discount": 4.44,
        "launch_year": "2009",
        "productImage": "https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png",
        "details": null
    },
    {
        "productName": "Falcon 9 Test Flight",
        "mrp": 540000,
        "rsp": 520000,
        "discount": 3.7,
        "launch_year": "2010",
        "productImage": "https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png",
        "details": null
    },
    {
        "productName": "COTS 1",
        "mrp": 630000,
        "rsp": 610000,
        "discount": 3.17,
        "launch_year": "2010",
        "productImage": "https://images2.imgbox.com/d9/3e/FfrN88ry_o.png",
        "details": null
    },
    {
        "productName": "COTS 2",
        "mrp": 720000,
        "rsp": 700000,
        "discount": 2.78,
        "launch_year": "2012",
        "productImage": "https://images2.imgbox.com/fc/7a/r9ITwL12_o.png",
        "details": "Launch was scrubbed on first attempt, second launch attempt was successful"
    },
    {
        "productName": "CRS-1",
        "mrp": 810000,
        "rsp": 790000,
        "discount": 2.47,
        "launch_year": "2012",
        "productImage": "https://images2.imgbox.com/0b/33/2eLGEejP_o.png",
        "details": "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions."
    },
    {
        "productName": "CRS-2",
        "mrp": 900000,
        "rsp": 880000,
        "discount": 2.22,
        "launch_year": "2013",
        "productImage": "https://images2.imgbox.com/1b/b6/Z4oktZeR_o.png",
        "details": "Last launch of the original Falcon 9 v1.0 launch vehicle"
    },
    {
        "productName": "CASSIOPE",
        "mrp": 990000,
        "rsp": 970000,
        "discount": 2.02,
        "launch_year": "2013",
        "productImage": "https://images2.imgbox.com/91/27/VhC1TTYN_o.png",
        "details": "Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle."
    },
    {
        "productName": "SES-8",
        "mrp": 1080000,
        "rsp": 1060000,
        "discount": 1.85,
        "launch_year": "2013",
        "productImage": "https://images2.imgbox.com/42/b0/vP0sk3d5_o.png",
        "details": "First GTO launch for Falcon 9"
    },
    {
        "productName": "Thaicom 6",
        "mrp": 1170000,
        "rsp": 1150000,
        "discount": 1.71,
        "launch_year": "2014",
        "productImage": "https://images2.imgbox.com/d8/6d/fnqIBEJh_o.png",
        "details": "Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had \"unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff\""
    },
    {
        "productName": "CRS-3",
        "mrp": 1260000,
        "rsp": 1240000,
        "discount": 1.59,
        "launch_year": "2014",
        "productImage": "https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png",
        "details": "Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle."
    },
    {
        "productName": "OG-2 Mission 1",
        "mrp": 1350000,
        "rsp": 1330000,
        "discount": 1.48,
        "launch_year": "2014",
        "productImage": "https://images2.imgbox.com/a7/b4/bcMrHMey_o.png",
        "details": "Total payload mass was 1,316 kg (2,901 lb) : 6 satellites weighing 172 kg each, plus two 142-kg mass simulators. This was the second Falcon 9 booster equipped with landing legs. Following second-stage separation, SpaceX conducted a controlled-descent test of the first stage, which successfully decelerated from hypersonic velocity in the upper atmosphere, made reentry and landing burns, deployed its legs and touched down on the ocean surface. As with the previous mission, the first stage then tipped over as expected and was not recovered."
    },
    {
        "productName": "AsiaSat 8",
        "mrp": 1440000,
        "rsp": 1420000,
        "discount": 1.39,
        "launch_year": "2014",
        "productImage": "https://images2.imgbox.com/bf/12/oSP2EwNz_o.png",
        "details": null
    },
    {
        "productName": "AsiaSat 6",
        "mrp": 1530000,
        "rsp": 1510000,
        "discount": 1.31,
        "launch_year": "2014",
        "productImage": "https://images2.imgbox.com/6f/c0/D3Owbmpo_o.png",
        "details": null
    },
    {
        "productName": "CRS-4",
        "mrp": 1620000,
        "rsp": 1600000,
        "discount": 1.23,
        "launch_year": "2014",
        "productImage": "https://images2.imgbox.com/b4/28/cQwcs8qz_o.png",
        "details": null
    },
    {
        "productName": "CRS-5",
        "mrp": 1710000,
        "rsp": 1690000,
        "discount": 1.17,
        "launch_year": "2015",
        "productImage": "https://images2.imgbox.com/25/b6/RhNppyL3_o.png",
        "details": "Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport drone ship. Many of the test objectives were achieved, including precision control of the rocket's descent to land on the platform at a specific point in the Atlantic ocean, and a large amount of test data was obtained from the first use of grid fin control surfaces used for more precise reentry positioning. The grid fin control system ran out of hydraulic fluid a minute before landing and the landing itself resulted in a crash."
    },
    {
        "productName": "DSCOVR",
        "mrp": 1800000,
        "rsp": 1780000,
        "discount": 1.11,
        "launch_year": "2015",
        "productImage": "https://images2.imgbox.com/63/c5/0OIpD59z_o.png",
        "details": "First launch under USAF's OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target."
    },
    {
        "productName": "ABS-3A / Eutelsat 115W B",
        "mrp": 1890000,
        "rsp": 1870000,
        "discount": 1.06,
        "launch_year": "2015",
        "productImage": "https://images2.imgbox.com/20/10/sqPgZfej_o.png",
        "details": "The launch was Boeing's first-ever conjoined launch of a lighter-weight dual-commsat stack that was specifically designed to take advantage of the lower-cost SpaceX Falcon 9 launch vehicle. Per satellite, launch costs were less than $30 million. The ABS satellite reached its final destination ahead of schedule and started operations on September 10."
    },
    {
        "productName": "CRS-6",
        "mrp": 1980000,
        "rsp": 1960000,
        "discount": 1.01,
        "launch_year": "2015",
        "productImage": "https://images2.imgbox.com/3d/55/kbVulokl_o.png",
        "details": "Following the first-stage boost, SpaceX attempted a controlled-descent test of the first stage. The first stage contacted the ship, but soon tipped over due to excess lateral velocity caused by a stuck throttle valve resulting in a later-than-intended downthrottle."
    },
    {
        "productName": "TürkmenÄlem 52°E / MonacoSAT",
        "mrp": 2070000,
        "rsp": 2050000,
        "discount": 0.97,
        "launch_year": "2015",
        "productImage": "https://images2.imgbox.com/c9/35/VNpbqUPb_o.png",
        "details": null
    },
    {
        "productName": "CRS-7",
        "mrp": 2160000,
        "rsp": 2140000,
        "discount": 0.93,
        "launch_year": "2015",
        "productImage": "https://images2.imgbox.com/d0/22/gyTVYo21_o.png",
        "details": "Launch performance was nominal until an overpressure incident in the second-stage LOX tank, leading to vehicle breakup at T+150 seconds. The Dragon capsule survived the explosion but was lost upon splashdown because its software did not contain provisions for parachute deployment on launch vehicle failure."
    },
    {
        "productName": "OG-2 Mission 2",
        "mrp": 2250000,
        "rsp": 2230000,
        "discount": 0.89,
        "launch_year": "2015",
        "productImage": "https://images2.imgbox.com/89/e8/5eeThzqZ_o.png",
        "details": "Total payload mass was 2,034 kg (4,484 lb) : 11 satellites weighing 172 kg each, plus a 142-kg mass simulator. This was the first launch of the upgraded v1.1 variant (later called Falcon 9 Full Thrust), with a 30 percent power increase. Orbcomm had originally agreed to be the third flight of the enhanced-thrust rocket, but the change to the maiden flight position was announced in October 2015. SpaceX received a permit from the FAA to land the booster on solid ground at Cape Canaveral, and succeeded."
    },
    {
        "productName": "Jason 3",
        "mrp": 2340000,
        "rsp": 2320000,
        "discount": 0.85,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/72/f2/uK9vYzvk_o.png",
        "details": "First launch of NASA and NOAA joint science mission under the NLS II launch contract (not related to NASA CRS or USAF OSP3 contracts). Last launch of the original Falcon 9 v1.1 launch vehicle. The Jason-3 satellite was successfully deployed to target orbit. SpaceX again attempted a recovery of the first stage booster by landing on an autonomous drone ship; this time located in the Pacific Ocean. The first stage did achieve a soft-landing on the ship, but a lockout on one of the landing legs failed to latch, so that the booster fell over and exploded."
    },
    {
        "productName": "SES-9",
        "mrp": 2430000,
        "rsp": 2410000,
        "discount": 0.82,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/fa/ef/4FBvVReu_o.png",
        "details": "Second launch of the enhanced Falcon 9 Full Thrust launch vehicle. Following the launch, SpaceX attempted an experimental landing test to a drone ship, although a successful landing was not expected because launch mass exceeded previously indicated limit for a GTO there was little fuel left. As predicted, booster recovery failed: the spent first stage \"landed hard\", but the controlled-descent, atmospheric re-entry and navigation to the drone ship were successful and returned significant test data on bringing back high-energy Falcon 9s."
    },
    {
        "productName": "CRS-8",
        "mrp": 2520000,
        "rsp": 2500000,
        "discount": 0.79,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/49/2a/gkSR50yc_o.png",
        "details": "Dragon carried over 1500 kg of supplies and delivered (stowed in its trunk) the inflatable Bigelow Expandable Activity Module (BEAM) to the ISS for two years of in-orbit tests. The rocket's first stage landed smoothly on SpaceX's autonomous spaceport drone ship 9 minutes after liftoff, making this the first ever successful landing of a rocket booster on a ship at sea as part of an orbital launch. The first stage B1021 was later also the first orbital booster to be used again, when launching SES-10 on March 30, 2017."
    },
    {
        "productName": "JCSAT-2B",
        "mrp": 2610000,
        "rsp": 2590000,
        "discount": 0.77,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/87/c9/qViUTdt5_o.png",
        "details": "Launched the JCSAT 14 communications satellite for Tokyo-based SKY Perfect JSAT Corp. JCSAT 14 will support data networks, television broadcasters and mobile communications users in Japan, East Asia, Russia, Oceania, Hawaii and other Pacific islands. This was the first time a booster successfully landed after a GTO mission."
    },
    {
        "productName": "Thaicom 8",
        "mrp": 2700000,
        "rsp": 2680000,
        "discount": 0.74,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/d1/de/waYRCanq_o.png",
        "details": "Manufactured by Orbital ATK, the 3,100-kilogram (6,800 lb) Thaicom 8 communications satellite will serve Thailand, India and Africa from the 78.5° East geostationary location. It is equipped with 24 active Ku-band transponders."
    },
    {
        "productName": "ABS-2A / Eutelsat 117W B",
        "mrp": 2790000,
        "rsp": 2770000,
        "discount": 0.72,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/ae/e9/VTH2y7S5_o.png",
        "details": "One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines."
    },
    {
        "productName": "CRS-9",
        "mrp": 2880000,
        "rsp": 2860000,
        "discount": 0.69,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/b6/52/p5vdNEJF_o.png",
        "details": "Among other cargo, an International Docking Adapter (IDA-2) was carried to the ISS. This mission had a successful first-stage landing at Cape Canaveral.*Including the reusable Dragon Capsule, total payload to orbit was 6457 kg."
    },
    {
        "productName": "JCSAT-16",
        "mrp": 2970000,
        "rsp": 2950000,
        "discount": 0.67,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/a4/21/eLkeQOl8_o.png",
        "details": "First attempt to touch down from a ballistic trajectory using a single-engine landing burn. All previous landings from a ballistic trajectory had fired three engines on the landing-burn, which provided more braking force, but subjected the vehicle to greater structural stresses. The single-engine landing burn takes more time and fuel, but puts less stress on the vehicle."
    },
    {
        "productName": "Amos-6",
        "mrp": 3060000,
        "rsp": 3040000,
        "discount": 0.65,
        "launch_year": "2016",
        "productImage": "https://images2.imgbox.com/54/7a/c5XLHIvL_o.png",
        "details": "The rocket and Amos-6 payload were lost in a launch pad explosion on September 1, 2016 during propellant fill prior to a static fire test. The pad was clear of personnel and there were no injuries."
    },
    {
        "productName": "Iridium NEXT Mission 1",
        "mrp": 3150000,
        "rsp": 3130000,
        "discount": 0.63,
        "launch_year": "2017",
        "productImage": "https://images2.imgbox.com/a6/e8/5PyY296y_o.png",
        "details": "Return-to-flight mission after the loss of Amos-6 in September 2016. Iridium NEXT will replace the original Iridium constellation, launched in the late 1990s. Each Falcon mission will carry 10 satellites, with a goal to complete deployment of the 66 plus 9 spare satellite constellation by mid 2018. The first two Iridium qualification units were supposed to ride a Dnepr rocket in April 2016 but were delayed, so Iridium decided to qualify the first batch of 10 satellites instead."
    },
    {
        "productName": "CRS-10",
        "mrp": 3240000,
        "rsp": 3220000,
        "discount": 0.62,
        "launch_year": "2017",
        "productImage": "https://images2.imgbox.com/d3/08/7YmXiSOQ_o.png",
        "details": "First Falcon 9 flight from the historic LC-39A launchpad at Kennedy Space Center, carrying supplies and materials to support dozens of science and research investigations scheduled during ISS Expeditions 50 and 51. The first stage returned to launch site and landed at LZ-1."
    },
    {
        "productName": "EchoStar 23",
        "mrp": 3330000,
        "rsp": 3310000,
        "discount": 0.6,
        "launch_year": "2017",
        "productImage": "https://images2.imgbox.com/54/f8/0X2hNhNK_o.png",
        "details": "Communications satellite for EchoStar Corp. EchoStar XXIII, based on a spare platform from the cancelled CMBStar 1 satellite program, will provide direct-to-home television broadcast services over Brazil. There was no attempt at a first-stage recovery so this rocket did not have landing legs or grid fins."
    },
    {
        "productName": "SES-10",
        "mrp": 3420000,
        "rsp": 3400000,
        "discount": 0.58,
        "launch_year": "2017",
        "productImage": "https://images2.imgbox.com/5b/10/dfj7yRG3_o.png",
        "details": "First payload to fly on a reused first stage, B1021, previously launched with CRS-8, which also landed a second time. In what is also a first, the payload fairing remained intact after a successful splashdown achieved with thrusters and a steerable parachute."
    },
    {
        "productName": "NROL-76",
        "mrp": 3510000,
        "rsp": 3490000,
        "discount": 0.57,
        "launch_year": "2017",
        "productImage": "https://images2.imgbox.com/0d/06/aNPEVF72_o.png",
        "details": "First launch under SpaceX's certification for national security space missions, which allows SpaceX to contract launch services for classified payloads. Second-stage speed and altitude telemetry were omitted from the launch webcast, which displayed first-stage telemetry instead, with continuous tracking of the booster from liftoff to landing for the first time."
    },
    {
        "productName": "Inmarsat-5 F4",
        "mrp": 3600000,
        "rsp": 3580000,
        "discount": 0.56,
        "launch_year": "2017",
        "productImage": "https://images2.imgbox.com/82/d6/SCoNa79H_o.png",
        "details": "At 6,070 kg this was the heaviest payload launched to GTO by a Falcon 9 rocket. The launch was originally scheduled for the Falcon Heavy, but performance improvements allowed the mission to be carried out by an expendable Falcon 9 instead."
    }
];