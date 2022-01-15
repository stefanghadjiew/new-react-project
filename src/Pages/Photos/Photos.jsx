import React, { useState } from 'react'
import {
    PageWrapper,
    PaginationComponent,
    H3,
    Subtitle,
    Navbar,
    ImagesList,
    SectionWrapper,
    CustomInput,
    CustomIconButton,
    CloseButton,
    CustomButton,
    ScrollToTopButton,
    Footer,
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

const PhotosPage = () => {
    const { isMobile } = MediaQueries()
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(20)
    const [searchResult, setSearchResult] = useState()
    const [searchInputValue, setSearchInputValue] = useState()
    const [searchByUrl, setSearchByUrl] = useState()
    const [openBackdrop, setOpenBackdrop] = useState(false)
    const { appState, dispatch } = useGlobalContext()
    const { photos, loading } = appState
    const { displayedImages } = photos

    const handlePageChange = (e, val) => {
        setPage(val)
        dispatch({ type: actionTypes.SET_PAGE, payload: val })
    }

    const handleSearchInputValueChange = (e) =>
        setSearchInputValue(e.currentTarget.value)

    const handleSearchByUrl = (e) => {
        setSearchByUrl(e.currentTarget.value)
    }

    const backdropOpen = () => {
        setOpenBackdrop(true)
    }

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false)
        setSearchByUrl('')
    }

    const clearSearch = () => {
        setSearchResult('')
        setSearchInputValue('')
        setSearchByUrl('')
    }

    const handleSearch = (val) => {
        let foundResult
        if (!val) return
        if (val.startsWith('https')) {
            foundResult = displayedImages.filter(
                (img) => img.links.html === val
            )
            setSearchByUrl('')
            setOpenBackdrop(false)
        } else {
            foundResult = displayedImages.filter(
                (img) => img.customTitle === val
            )
        }
        setSearchResult(foundResult)
    }

    return loading ? (
        <h1>Loading ...</h1>
    ) : (
        <>
            <Navbar />
            <PageWrapper>
                <SectionWrapper>
                    <H3 text="Discover some of the best photos on the web" />
                    <Subtitle
                        text="Initially the component renders the first 12 photos with an api call,and each page is a separate request.The search will work only for the current page :)"
                        style={{ width: '50%' }}
                    />
                    <H3
                        text="Here are some by img URL searches that are currently on the page :"
                        style={{
                            marginTop: '2rem',
                            fontSize: '1.5rem',
                        }}
                    />

                    <Subtitle
                        text={displayedImages && displayedImages[0].links.html}
                    />
                    <Subtitle
                        text={displayedImages && displayedImages[1].links.html}
                    />
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
                                outsidevalue={searchInputValue}
                                handleoutsidevalue={
                                    handleSearchInputValueChange
                                }
                            />
                            {searchInputValue && (
                                <CloseButton
                                    onClick={() => setSearchInputValue('')}
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
                                onClick={() => handleSearch(searchInputValue)}
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
                    <ImagesList
                        images={searchResult ? searchResult : displayedImages}
                    />
                    <PaginationComponent
                        page={page}
                        count={perPage}
                        onChange={handlePageChange}
                    />
                </SectionWrapper>
                <SearchByUrlBackdrop
                    open={openBackdrop}
                    onCloseClick={handleCloseBackdrop}
                    inputValue={searchByUrl}
                    handleSearchByUrl={handleSearchByUrl}
                    onSearchClick={() => handleSearch(searchByUrl)}
                />
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
