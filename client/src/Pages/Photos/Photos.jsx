import React, {Suspense,lazy,useEffect} from 'react'
import {
    PageWrapper,
    PaginationComponent,
    H3,
    Navbar,
    SectionWrapper,
    CustomInput,
    CustomIconButton,
    CloseButton,
    CustomButton,
    
    ScrollToTopButton,
    Footer,
    Loader
} from '../../Components'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'
import SearchIcon from '@mui/icons-material/Search'
import ImageSearchIcon from '@mui/icons-material/ImageSearch'
import MediaQueries from '../../responsive/MediaQueries'
import SearchByUrlBackdrop from './SearchByUrlBackdrop/SearchByUrlBackdrop'
import Subscription from './Subscription/Subscription.jsx'
import actionTypes from '../../GlobalContext/actionTypes'
import OnDemand from './OnDemand/OnDemand.jsx'
import { SearchWrapper, SearchComponent } from './styles'
import useInput from '../../CustomHooks/useInput'
const ImagesList = lazy(() => import('../../Components/ImagesList/ImagesList.jsx'))
const ImageBackdrop = lazy(() => import('./ImageBackdrop/ImageBackdrop'))
/* const ImagesList = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("../../Components/ImagesList/ImagesList")), 1000);
    });
  }); */


const PhotosPage = () => {
    const { isMobile } = MediaQueries()
    const page = useInput(1)
    const pageCount = useInput(20)
    const searchResult = useInput('')
    const searchInput = useInput('')
    const searchByUrl = useInput('')
    const openBackdrop = useInput(false)
    const openImageBackdrop = useInput(false)
    const { appState, dispatch } = useGlobalContext()
    const { photos } = appState
    const { displayedImages } = photos

    useEffect(() =>{
        console.log("Rendering")
    },[])

    const handlePageChange = (e, val) => {
        page.setValue(val)
        dispatch({ type: actionTypes.SET_PAGE, payload: val })
    }

    
    const clearSearchInputValue = () => {
        searchInput.setValue('')
    }

    const backdropOpen = () => {
        openBackdrop.setValue(true)
    }

    const handleCloseBackdrop = () => {
        openBackdrop.setValue(false)
        searchByUrl.setValue('')
    }

    const clearSearch = () => {
        searchResult.setValue('')
        searchInput.setValue('')
        searchByUrl.setValue('')
    }

    const handleSearch = (val) => {
        if (!val) return
        let foundResult
        if (openBackdrop.value) {
            foundResult = displayedImages.filter(
                (img) => img.links.html === val
            )
            searchByUrl.setValue('')
            openBackdrop.setValue(false)
        } else {
            foundResult = displayedImages.filter(
                (img) => img.customTitle === val
            )
        }
        searchResult.setValue(foundResult)
    }

    const handleOpenImageBackdrop = () => {
        openImageBackdrop.setValue(true);
    }

    const handleCloseImageBackdrop = () => {
        openImageBackdrop.setValue(false);
    }
    

     /* loading ? (
        <Loader/>
    ) :  */return (
        <>
            <Navbar />
            <PageWrapper>
                <SectionWrapper>
                    <H3 text="Discover some of the best photos on the web" />
                    <SearchComponent>
                        <SearchWrapper
                            sx={{
                                width: isMobile ? '100%' : '50%',
                            }}
                        >
                            <CustomIconButton
                                sx={{
                                    height: '3rem',
                                    borderRadius: '1.5rem',
                                    width: '5.5rem',
                                }}
                                tooltipTitle="Search by image url"
                                icon={<ImageSearchIcon />}
                                onClick={backdropOpen}
                            />
                            <CustomInput
                                sx={{
                                    margin: '0px 20px',
                                    '& .MuiInput-input': {
                                        border: 0,
                                    },
                                    '& .MuiInputBase-root': {
                                        color: '#2c2d3d',
                                    },
                                    '& label': {
                                        color: '#2c2d3d',
                                        opacity: '.5',
                                    },
                                    '& label.Mui-focused': {
                                        color: '#2c2d3d',
                                        opacity: '.8',
                                    },
                                }}
                                label="Search for Photos"
                                type="text"
                                value={searchInput.value}
                                onChange={searchInput.onChange}
                            />
                            {searchInput.value && (
                                <CloseButton
                                    onClick={clearSearchInputValue}
                                />
                            )}
                            <CustomIconButton
                                sx={{
                                    height: '3rem',
                                    borderRadius: '1.5rem',
                                    width: '5.5rem',
                                }}
                                tooltipTitle="Search"
                                icon={<SearchIcon />}
                                onClick={() => handleSearch(searchInput.value)}
                            />
                        </SearchWrapper>
                        <CustomButton
                            buttonText="Clear filter"
                            sx={{
                                marginTop: '5rem',
                                marginLeft: '2rem',
                            }}
                            onClick={clearSearch}
                        />
                    </SearchComponent>
                </SectionWrapper>
                <SectionWrapper style={{ marginTop: '5rem' }}>
                    <Suspense fallback={<Loader/>}>
                        <ImagesList
                            handleOpenImageBackdrop={handleOpenImageBackdrop}
                            images={searchResult.value ? searchResult.value : displayedImages}
                        />
                    </Suspense>
                    <PaginationComponent
                        page={page.value}
                        count={pageCount.value}
                        onChange={handlePageChange}
                    />
                </SectionWrapper>
               
                <SearchByUrlBackdrop
                    open={openBackdrop.value}
                    onCloseClick={handleCloseBackdrop}
                    input={searchByUrl}
                    onSearchClick={() => handleSearch(searchByUrl.value)}
                />
                <Suspense fallback={<Loader/>}>
                    <ImageBackdrop openImageBackdrop={openImageBackdrop.value} closeImageBackdrop={handleCloseImageBackdrop}/>
                </Suspense>
                <SectionWrapper>
                    <H3 text="Choose a plan to download editorial images" />
                    <div style={{ display: 'flex' }}>
                        <Subscription />
                        <OnDemand />
                    </div>
                </SectionWrapper>
            </PageWrapper>
            <Footer />
            <ScrollToTopButton />
        </>
    )
}

export default PhotosPage
