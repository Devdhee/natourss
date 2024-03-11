import path from 'path';
import Tour from '../modules/tourModules.js';
const __dirname = path.resolve();

// ROUTE HANDLERS
const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch {
    //
  }
};

const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch {
    //
  }
};

const createTour = async (req, res) => {
  try {
    // const newTour = new Tour({});
    // newTour.save()

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid dataset',
    });
  }
};

const updateTour = (req, res) => {
  const id = Number(req.params.id);
  // const tour = tours.find((el) => el.id === id);

  // const updatedTour = { ...tour, ...req.body };
  // const updatedTours = tours.map((tour) =>
  //   tour.id === updatedTour.id ? updatedTour : tour
  // );

  // fs.writeFile(
  //   `${__dirname}/../dev-data/data/tours-simple.json`,
  //   JSON.stringify(updatedTours),
  //   (err) => {
  //     res.status(200).json({
  //       status: 'success',
  //       data: {
  //         tour: updatedTour,
  //       },
  //     });
  //   }
  // );
};

const deleteTour = (req, res) => {
  const id = Number(req.params.id);
  // const tour = tours.find((el) => el.id === id);

  // const deletedTour = tours.filter((el) => el.id !== tour.id);
  // fs.writeFile(
  //   `${__dirname}../dev-data/data/tours-simple.json`,
  //   JSON.stringify(deletedTour),
  //   (err) => {
  //     res.status(204).json({
  //       status: 'success',
  //       data: null,
  //     });
  //   }
  // );
};

export { getAllTours, getTour, updateTour, createTour, deleteTour };
